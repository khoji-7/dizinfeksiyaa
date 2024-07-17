 import cls from "./style.module.css"
 import { useTranslation } from "react-i18next";
 
 

 function guarante(){
    const { t } = useTranslation();
    
    return(
        <div className={cls.guaranteParent}>
        <div className={cls.container}>
            <img src="https://www.dezinfeksiyatashkent.uz/assets/cleanT-f1a5f564.jpg" alt="" className={cls.guarenteImg}/>
            <div className={cls.guarante}>
                <img src="https://www.dezinfeksiyatashkent.uz/assets/d3icons-b8f1c170.svg" alt="" className={cls.guarantelogo}/>
            <p className={cls.guaranteTitle}>
                {t("guaranteTitle")}
            </p>
            <button className={cls.guaranteBtn}> <a href="#contact">{t("bog'lanish")}</a></button>
            </div>
        </div>
    </div>  
    )
 }
export default guarante