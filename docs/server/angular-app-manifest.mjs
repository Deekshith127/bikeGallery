
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/bikeGallery/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/bikeGallery"
  },
  {
    "renderMode": 2,
    "route": "/bikeGallery/seller-auth"
  }
],
  assets: {
    'index.csr.html': {size: 674, hash: '8c91174616569527df3e5c2eac296e83c0143a07539c2c06b545117a1943ce87', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '0536511c475f6048c9e51dbbb9a476c18e0edd45f9a441fd2f2a7d652513b696', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3510, hash: '4644b1d0ee1a3c070c7dbdf530ed6bac225848d5820587b75f7734a249d763f1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'seller-auth/index.html': {size: 5244, hash: '04421fbb33789957f7653a331f948a8b68321dfc10002ea7b15678a42b76d83b', text: () => import('./assets-chunks/seller-auth_index_html.mjs').then(m => m.default)},
    'styles-K2STFDBI.css': {size: 388, hash: 'iRPPGABrNTM', text: () => import('./assets-chunks/styles-K2STFDBI_css.mjs').then(m => m.default)}
  },
};
