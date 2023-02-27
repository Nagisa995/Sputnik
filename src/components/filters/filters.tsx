import { FC, useState } from "react";
import "./style.css";

interface IFilters {
  isModal?: boolean;
  children: React.ReactNode;
  blockStyle?: string;
  modalBackground?: string;
  buttonTitle?: string;
  buttonStyle?: string;
}

export const Filters: FC<IFilters> = ({
  isModal = false,
  children,
  blockStyle = "",
  modalBackground = "modal_background",
  buttonTitle = "Другие фильтры",
  buttonStyle = "button_default",
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      {isModal && (
        <button className={buttonStyle} onClick={() => setIsModalVisible(true)}>
          {buttonTitle}
        </button>
      )}

      {(!isModal || isModalVisible) && (
        <div
          className={isModal ? "modal " + modalBackground : ""}
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className={"filters_block" + blockStyle}
            onClick={(e) => e.stopPropagation()}
          >
           Расположите элементы для фильтрации внутри компонента
            {children}
            {isModal && (
              <button
                className="modal_close_button"
                onClick={() => setIsModalVisible(false)}
              >
                Закрыть
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
