import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'books',
        loadComponent: () =>
          import('../books/books.page').then((m) => m.BooksPage),
      },
      {
        path: 'songs',
        loadComponent: () =>
          import('../songs/songs.page').then((m) => m.SongsPage),
      },
      {
        path: 'movies',
        loadComponent: () =>
          import('../movies/movies.page').then((m) => m.MoviesPage),
      },
      {
        path: '',
        redirectTo: '/tabs/books',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/books',
    pathMatch: 'full',
  },
];
