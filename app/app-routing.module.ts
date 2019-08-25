import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { FormComponent } from "./form/form.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";

const routes: Routes =[
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'users',
        component: UsersComponent
    },
    {
        path:'details/:id',
        component:UserdetailsComponent
      },
    {
        path:'form',
        component:FormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}