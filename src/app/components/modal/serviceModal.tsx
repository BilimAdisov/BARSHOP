import { ServiceList } from "@/app/COMMON/moks/serviceMoks";

export function MService({ open, close }: any) {
  return (
    <div className={open ? "mservice active" : "mservice"} onClick={close}>
      <div
        className={open ? "ms-forma active" : "ms-forma"}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="ms-list">
          {ServiceList.map((item: any) => (
            <li className="ms-item" key={item.id}>
              <span className="s-naming">{item.name}</span>
              <span className="s-price">{item.price} сомов</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
