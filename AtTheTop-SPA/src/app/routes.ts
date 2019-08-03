import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddsummitsComponent } from './users/user-addsummits/user-addsummits.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'user/profile', component: UserProfileComponent },
            { path: 'user/edit', component: UserEditComponent,
                canDeactivate: [PreventUnsavedChanges] },
            { path: 'user/addsummits', component: UserAddsummitsComponent,
                canDeactivate: [PreventUnsavedChanges] },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
