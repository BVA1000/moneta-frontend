import "./layout.css";
import Navigation from "../Navigation/navigation";
import Footer from "../Footer/footer";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
