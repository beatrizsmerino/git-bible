import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CommandsGit from "../views/CommandsGit.vue";
import CommandsGitFlow from "../views/CommandsGitFlow.vue";
import Bibliografy from "../views/Bibliografy.vue";

Vue.use(VueRouter);

const routes = [
	{
		"path": "",
		"name": "home",
		"component": Home,
		"meta": {
			"title": "Home",
			"metaTags": [
				{
					"name": "description",
					"content": "The home page of GitBible app.",
				},
			],
		},
	},
	{
		"path": "/command-git",
		"name": "command-git",
		"component": CommandsGit,
		"meta": {
			"title": "Git commands",
			"metaTags": [
				{
					"name": "description",
					"content": "List of Git commands of GitBible app.",
				},
			],
		},
	},
	{
		"path": "/command-git-flow",
		"name": "command-git-flow",
		"component": CommandsGitFlow,
		"meta": {
			"title": "Git Flow commands",
			"metaTags": [
				{
					"name": "description",
					"content": "List of Git Flow commands of GitBible app.",
				},
			],
		},
	},
	{
		"path": "/bibliografy",
		"name": "bibliografy",
		"component": Bibliografy,
		"meta": {
			"title": "Bibliografy",
			"metaTags": [
				{
					"name": "description",
					"content": "Bibliography of GitBible app.",
				},
			],
		},
	},
	{
		"path": "*",
		"redirect": "/",
		"component": Home,
		"meta": {
			"title": "Home",
			"metaTags": [
				{
					"name": "description",
					"content": "The home page of GitBible app.",
				},
			],
		},
	},
];

function getPositionForHashRoute(to) {
	const element = document.querySelector(to.hash);
	const selectorIndex = element?.getAttribute("data-index");

	if (element && selectorIndex === "1") {
		return {
			"selector": to.hash,
			"offset": { "y": 400 },
			"behavior": "smooth",
		};
	} else if (selectorIndex === "0") {
		return false;
	}

	return {
		"selector": to.hash,
		"offset": { "y": 200 },
		"behavior": "smooth",
	};
}

async function getPositionWithScrollToTop(app, to) {
	const scrollToTopPosition = {
		"x": 0,
		"y": 0,
	};
	const position = to.matched.some(m => m.meta.scrollToTop) ? scrollToTopPosition : {};
	await new Promise(resolve => app.$root.$once("triggerScroll", resolve));

	return position;
}

const scrollBehavior = function(to, from, savedPosition) {
	if (savedPosition) {
		return savedPosition;
	}

	if (to.hash) {
		return getPositionForHashRoute(to);
	}

	return getPositionWithScrollToTop(this.app, to);
};

const router = new VueRouter({
	"mode": "history",
	"base": __dirname,
	routes,
	scrollBehavior,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
	const nearestWithTitle = to.matched.
		slice().
		reverse().
		find(r => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched.
		slice().
		reverse().
		find(r => r.meta && r.meta.metaTags);
	from.matched.
		slice().
		reverse().
		find(r => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = `${nearestWithTitle.meta.title} | GitBible` || "GitBible";
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(el => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) {
		return next();
	}

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags.
		map(tagDef => {
			const tag = document.createElement("meta");

			Object.keys(tagDef).forEach(key => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create, so we don't interfere with other ones.
			tag.setAttribute("data-vue-router-controlled", "");

			return tag;
		}).

		// Add the meta tags to the document head.
		forEach(tag => document.head.appendChild(tag));

	return next();
});

export default router;
