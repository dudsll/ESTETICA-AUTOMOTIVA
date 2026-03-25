function Form() {
    return (
        <div className="form-container">
            <fieldset className="formulario-contato">
                <legend>Entre em contato e agende o spa do seu carro!</legend>
                <div className="form">
                    <form id="contact-form" name="formulario-de-cadastro" autoComplete="off"
                        target="_blank" method="post" action="#">
                        <label>Nome:</label> <input type="text" name="name" required /><br /><br />
                        <label>Email:</label> <input type="email" name="email" required /><br /><br />
                        <label>Marca e modelo do veículo:</label> <input type="text" name="vehicle_model" required /><br /><br />
                        <label>Ano do veículo:</label> <input type="number" min="1950" max="2027"
                            name="vehicle_year" required /><br /><br />
                        <label>Cor do veículo: </label><input type="color" name="vehicle_color" required /><br /><br />
                        <label>O que está ofuscando a beleza do seu carro?</label>
                        <textarea type="text" name="message" required></textarea> <br /><br />
                        <label>Melhor data de agendamento: </label> <input type="date" name="appointment_date" required /><br /><br />
                        <div className="botoes-form-container">
                            <button className="button-form" type="reset">Limpar</button>
                            <button className="button-form" type="submit">Pronto!</button>
                        </div>
                    </form>
                </div>
            </fieldset>
        </div>
    );
}

export default Form;