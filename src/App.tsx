import { AppHeader } from './components/AppHeader';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { useRoute } from './hooks/useRoute';
import { showcaseRegistry } from './showcases/registry';
import './app.css';
export default function App() { const { path, navigate } = useRoute(); const match = path.match(/^\/showcase\/([^/]+)(?:\/product\/(\d+))?$/); const slug = match?.[1]; const entry = slug ? showcaseRegistry[slug] : undefined; const product = entry && match?.[2] ? entry.config.products.find(item => item.number === Number(match[2])) : undefined; return <><AppHeader onHome={() => navigate('/')} onAbout={() => navigate('/about')} />{path === '/about' ? <AboutPage navigate={navigate} /> : product && entry ? <ProductPage config={entry.config} product={product} navigate={navigate} /> : entry ? <entry.component navigate={navigate} /> : path === '/' ? <GalleryPage navigate={navigate} /> : <main className="not-found"><h1>Halaman tidak ditemukan.</h1><button className="primary-button" onClick={() => navigate('/')}>Kembali ke galeri</button></main>}</>; }
