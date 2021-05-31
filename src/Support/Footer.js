

function Footer () {
    return (
    <div>
        <div className="footer">
            <div className="d-flex justify-content-center align-items-center color-footer">
                <div>
                    <h3 className="title color-footer">Fale Conosco</h3>
                    <p className="footer-text m-0 text-center">contato: |xx| x xxxx-xxxx</p>
                    <div className="d-flex justify-content-between">
                        <a href="#as"><i className="fab fa-whatsapp"></i></a>
                        <a href="#as"><i className="fab fa-instagram"></i></a>
                        <a href="#as"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Copyright © 2021, All Right Reserved <br/>by Murilo Maia</span>
                    </div>
                    <div className="col-md-6">
                        <div className="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#as">Home</a>
                                </li>
                                <li>
                                    <a href="#as">Terms</a>
                                </li>
                                <li>
                                    <a href="#as">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#as">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}




export default Footer