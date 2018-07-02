import {NgModule}  from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {UsersComponent} from './users/users.component';
import { rootRenderNodes } from '@angular/core/src/view';

const appRoutes :Routes = [
{
    path:'home',
    component:HomeComponent
},
{
    path:'user',
    component : UserComponent
},
{
    path:'users',
    component : UsersComponent
}

];

@NgModule({
    imports :[
        RouterModule.forRoot(appRoutes,{useHash:true})
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}