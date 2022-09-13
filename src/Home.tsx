import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
    <div style={{display: 'grid', placeItems: 'center', gap: 18, gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <div>
            <button onClick={() => navigate('/local')}>Local</button>
        </div>
        <div>
            <button onClick={() => navigate('/props')}>Prop Drilling</button>
        </div>
        <div>
            <button onClick={() => navigate('/context')}>Context</button>
        </div>
        <div>
            <button onClick={() => navigate('/redux')}>Redux</button>
        </div>
        <div>
            <button onClick={() => navigate('/zustand')}>Zustand</button>
        </div>
    </div>);
}