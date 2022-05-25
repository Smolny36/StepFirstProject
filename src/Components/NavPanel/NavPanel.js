import App from "../../App";

function NavPanel() {
    return (
        <div className="Nav">
            <div className="Logo_box">  <img width='120' src="https://turbologo.ru/create-logo/templates/78837-sushi-krug-logotip" alt="Logo"/></div>


            <div className="Nav_box">
                <a href="">Состояние станции</a>
                <a href=""> О нас </a>
                <a href=""> Контакты </a>
                <a href="">Магазин</a>
            </div>
            <div className="Login_box">


                <button className="button-10" role="button">Button 10</button>

            </div>
        </div>

    );
}

export default NavPanel;


