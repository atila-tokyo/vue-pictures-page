import  Subscription from './components/subscription/Subscription.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', component: Home},
    { path: '/subscription', component: Subscription}
];