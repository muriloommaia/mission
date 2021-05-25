import './style.css'

function Footer () {
    return (
    <div>
        <div class="footer">
            <div class="d-flex justify-content-center align-items-center color-footer">
                <div>
                    <h3 class="title color-footer">Fale Conosco</h3>
                    <p class="footer-text m-0 text-center">contato: |xx| x xxxx-xxxx</p>
                    <div class="d-flex justify-content-between">
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <span>Copyright © 2021, All Right Reserved <br/>by Murilo Maia</span>
                    </div>
                    <div class="col-md-6">
                        <div class="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
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