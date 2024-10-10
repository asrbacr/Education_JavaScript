import s from "./Title.module.scss";

export const Title = () => {
  return (
    <div className={s.content}>
      <div className={s.title}>
        <div className={`${s.title_content} ${s.title_center}`}>
          <div className={s.title_content_left}>
            <img
              src="./img/title_img.png"
              alt="man"
              className={s.title_content_img}
            />
          </div>
          <div className={s.title_headers}>
            <div className={s.title_headers}>
              <h1 className={`${s.title_header} ${s.center}`}>
                THE&nbsp;BRAND
                <span className={s.title_header__down}>
                  OF&nbsp;LUXERIOUS&nbsp;
                  <span className={s.title_header__red}>FASHION</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={`${s.sale} ${s.center}`}>
        <div className={s.sale__item}>
          <img
            className={s.sale__img}
            src="./img/offer_card_1.jpeg"
            alt="sale image"
          />
          <div className={s.sale__content}>
            <p className={s.sale__text}>30% OFF</p>
            <h3 className={s.sale__heading}>FOR WOMEN</h3>
          </div>
        </div>
        <div className={s.sale__item}>
          <img
            className={s.sale__img}
            src="./img/offer_card_2.jpeg"
            alt="sale image"
          />
          <div className={sale__content}>
            <p className={sale__text}>HOT DEAL</p>
            <h3 className={sale__heading}>FOR MEN</h3>
          </div>
        </div>
        <div className={s.sale__item}>
          <img
            className={s.sale__img}
            src="./img/offer_card_3.jpeg"
            alt="sale image"
          />
          <div className={s.sale__content}>
            <p className={s.sale__text}>NEW ARRIVALS</p>
            <h3 className={s.sale__heading}>FOR kids</h3>
          </div>
        </div>
        <div className={`${s.sale__item} ${s.sale__item_big}`}>
          <img
            className={s.sale__img}
            src="./img/offer_card_down.jpeg"
            alt="sale image"
          />
          <div className={s.sale__content}>
            <p className={s.sale__text}>LUXIROUS & TRENDY</p>
            <h3 className={s.sale__heading}>ACCESORIES</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
