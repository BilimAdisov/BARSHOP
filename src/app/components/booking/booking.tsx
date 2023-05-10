import { BLocation } from "@/app/COMMON/moks/bookingMoks";
import { BookingCard } from "./bookingCard";
import { IBooking } from "@/app/COMMON/types/bookingTypes";

export function BookingComponent() {
  return (
    <div className="booking">
      <div className="booking-wrapper">
        <h1 className="booking-h1">Записаться онлайн</h1>
        <div className="bcard-container">
          {BLocation.map((item: IBooking) => (
            <BookingCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
