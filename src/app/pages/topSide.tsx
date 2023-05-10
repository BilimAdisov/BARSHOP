import { BookingComponent } from "../components/booking/booking";
import { DividerComponent } from "../components/divider/divider";
import { Header } from "../components/header/header";
import { HeaderTitle } from "../components/header/headerTitle";
import { ServiceComponent } from "../components/service/service";

export function TopSide() {
  return (
    <div className="topside">
      <div className="topside-wrapper">
        <div className="header-container">
          <Header />
          <HeaderTitle />
          <BookingComponent />
          <DividerComponent />
          <ServiceComponent />
        </div>
      </div>
    </div>
  );
}
