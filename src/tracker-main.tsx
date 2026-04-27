import './tracker.css';
import { createRoot } from 'react-dom/client';
import TrackerInfographic from './TrackerInfographic';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(<TrackerInfographic />);
