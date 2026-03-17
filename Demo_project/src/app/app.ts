import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DebugPanelComponent } from './components/debug-panel/debug-panel';
import { AppStoreService } from './store/app-store.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, DebugPanelComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  debugPanelOpen = false;
  private store = inject(AppStoreService);

  users$ = this.store.users$;
  currentUserId$ = this.store.currentUserId$;

  toggleDebugPanel() {
    this.debugPanelOpen = !this.debugPanelOpen;
  }

  onUserChange(event: Event) {
    const userId = Number((event.target as HTMLSelectElement).value);
    this.store.setCurrentUser(userId);
  }
}
