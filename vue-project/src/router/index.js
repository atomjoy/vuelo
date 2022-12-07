import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
	linkActiveClass: 'router-link-active',
	history: createWebHistory(import.meta.env.BASE_URL),
	strict: true,
	sensitive: true,
	routes: [
		// Pages
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/pages/AboutView.vue'),
		},
		// Authentication
		{
			path: '/reset-password',
			name: 'reset-password',
			component: () => import('../views/auth/ResetView.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/auth/LoginView.vue'),
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('../views/auth/RegisterView.vue'),
		},
		{
			path: '/activate/:id/:code',
			name: 'activate',
			component: () => import('../views/auth/ActivateView.vue'),
		},
		{
			path: '/logout',
			name: 'logout',
			component: () => import('../views/auth/LogoutView.vue'),
		},
		// Panel
		{
			path: '/panel',
			name: 'panel',
			component: () => import('../views/panel/PanelView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/panel/change-password',
			name: 'panel.change-password',
			component: () => import('../views/panel/ChangePasswordView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/panel/settings',
			name: 'panel.settings',
			component: () => import('../views/panel/SettingsView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/panel/messages',
			name: 'panel.messages',
			component: () => import('../views/panel/MessagesView.vue'),
			meta: { requiresAuth: true },
		},
		// Map samples
		{
			path: '/map/marker',
			name: 'map.marker',
			component: () => import('../components/map/google/examples/MapMarkerView.vue'),
		},
		{
			path: '/map/polygon',
			name: 'map.polygon',
			component: () => import('../components/map/google/examples/MapPolygonView.vue'),
		},
		{
			path: '/map/marker/click',
			name: 'map.marker.click',
			component: () => import('../components/map/google/examples/MapMarkerOnClickView.vue'),
		},
		{
			path: '/map/polygon/draw',
			name: 'map.polygon.draw',
			component: () => import('../components/map/google/examples/MapPolygonDrawView.vue'),
		},
		// Routes fallback
		{
			path: '/:catchAll(.*)',
			name: 'catchall',
			component: () => import('../views/errors/Error404View.vue'),
		},
		// { path: '/home', redirect: '/' },
		// { path: '/home', redirect: { name: 'homepage' } },
	],
	scrollBehavior(to, from, savedPosition) {
		// scroll to #hashtag in heml <h1 id="hashtag">
		if (to.hash) {
			return { el: to.hash, behavior: 'smooth' }
		}
		// return desired position
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
		// return { el: '#scroll-to', top: -10 } // el: document.getElementById('scroll-to')
		// if (to.hash) { return { el: to.hash, behavior: 'smooth', }} // scroll to #hashtag in heml <h1 id="hashtag">
	},
})

// Async if you want to check if the user is authenticated to the server
router.beforeEach(async (to, from, next) => {
	// ✅ This will work make sure the correct store is used for the current running app
	const auth = useAuthStore()

	// ✅ Login with remember me token and check is user authenticated
	await auth.isAuthenticated()

	// Check routes
	if (to.name == 'login' && auth.isUserLogged) {
		// ✅ Redirect to panel if logged
		next({
			name: 'panel',
		})
	} else if (to.meta.requiresAuth && !auth.isUserLogged) {
		// ✅ Redirect to login if not logged
		next({
			name: 'login',
			query: { redirected_from: to.fullPath },
		})
	} else {
		// ✅ Continue
		next()
	}
	// ✅ You can use
	// return '/login'
	// return { name: 'login' }
})

// router.afterEach((to, from, failure) => {
// 	if (!failure) sendToAnalytics(to.fullPath)
// })

export default router
