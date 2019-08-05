import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from '../users/user-edit/user-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<UserEditComponent> {
    canDeactivate(component: UserEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Czy na pewno chcesz opuścić stronę? Wszystkie niezapisane zmiany zostaną usunięte');
        }
        return true;
    }
}
