import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

let ngPlatform: any = null;

export function mount() {
  if (!ngPlatform) {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then((platform) => {
        ngPlatform = platform;
      })
      .catch((err) => console.error('Erro ao inicializar Angular:', err));
  }
}

export function unmount() {
  if (ngPlatform) {
    ngPlatform.destroy();
    ngPlatform = null;
  }
}
