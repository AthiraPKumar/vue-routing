import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
            {
            path: '/teams',
            component: TeamsList
            },
            {
            path: '/users',
            component: UsersList
            },
]
});
const app = createApp(App)
// allows to connect the vue app with 3rd party pkg
app.use(router);

app.mount('#app');
