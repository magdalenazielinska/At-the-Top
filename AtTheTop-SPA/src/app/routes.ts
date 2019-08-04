import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddsummitsComponent } from './users/user-addsummits/user-addsummits.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'user/:id', component: UserProfileComponent,
                resolve: {user: MemberDetailResolver} },
            { path: 'user/edit', component: UserEditComponent },
            { path: 'user/addsummits', component: UserAddsummitsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
