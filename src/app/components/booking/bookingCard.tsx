import { IBooking } from "@/app/COMMON/types/bookingTypes";

export function BookingCard({ adress, name }: IBooking) {
  return (
    <div className="bcard-wrapper">
      <h4 className="bcard-h3">{name}</h4>
      <h6 className="bcard-h6">{adress}</h6>
      <button className="bcard-btn">Связаться</button>
    </div>
  );
}
