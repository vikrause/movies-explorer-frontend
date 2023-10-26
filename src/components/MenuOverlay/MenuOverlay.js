import "./MenuOverlay.css"

export default function MenuOverlay({ isOpen, children }) {
    return (
        <div className={`menu-overlay ${isOpen ? `menu-overlay_active` : ""}`}>
            {children}
        </div>
    )
}