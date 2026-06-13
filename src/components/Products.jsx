import { useNavigate } from "react-router-dom";

const products = [
  { icon: "⚙️", name: "Gear Pumps" },
  { icon: "🌀", name: "Vane Pumps" },
  { icon: "🔩", name: "Piston Pumps" },
  { icon: "🔧", name: "Hydraulic Motors" },
  { icon: "🎛️", name: "Control Valves" },
  { icon: "🏗️", name: "Cylinders" },
  { icon: "💧", name: "Flow Valves" },
  { icon: "📦", name: "+10 More" },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="products-preview" id="products-preview">
      <div className="products-inner">

        {/* HEADER */}
        <div className="section-header">
          <div className="section-badge">Products</div>

          <h2>Our Product Catalog</h2>

          <p>
            High-performance hydraulic components engineered for reliability across all industrial applications.
          </p>
        </div>

        {/* GRID */}
        <div className="products-mini-grid">
          {products.map((item, index) => (
            <div className="product-mini-card" key={index}>
              <div className="pm-icon">{item.icon}</div>
              <div className="pm-name">{item.name}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="products-cta">
          <button
            className="btn-primary"
            onClick={() => navigate("/products")}
          >
            View All Products →
          </button>
        </div>

      </div>
    </section>
  );
}