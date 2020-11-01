import  Subscription from './components/subscription/Subscription.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', component: Home, title: 'Home'},
    { path: '/subscription', component: Subscription, title: 'Subscription'}
];