import React from "react";

import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row text-center d-flex justify-content-between py-5">
          <div className="col-xs-12 col-md-3">
            <p className="size-title-footer">
              <strong>iRead</strong>
            </p>
            <p className="pt-3 size-item-footer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, quam vitae est Sed non eros elementum nulla sodales
              ullamcorper.
            </p>
            <p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-linkedin-in mx-3 "></i>
              <i class="fab fa-twitter"></i>
            </p>
            <span className="circle-footer">
              <i class="fas fa-circle"></i>
              <i class="fas fa-circle mx-2"></i>
              <i class="fas fa-circle"></i>
            </span>
          </div>
          <div className="col-xs-12 col-md-3">
            <p className="size-title-footer">
              <strong>Contact Us</strong>
            </p>
            <p className="pt-3">
              <i class="fas fa-map-marker-alt icon-footer"></i>
              <span className="size-item-footer">
                3050 Universal Blvd #190 Fort Lauderdale, FL, 33331, Sydney New
                York City
              </span>
            </p>
            <p>
              <i class="fas fa-envelope icon-footer"></i>
              <span className="size-item-footer">susislibrary@domain.com</span>
            </p>
            <p>
              <i class="fas fa-phone icon-footer"></i>
              <span className="size-item-footer">+62 582 528 527 21</span>
            </p>
            <p>
              <i class="fab fa-internet-explorer icon-footer"></i>
              <span className="size-item-footer">www.susislibrary.com</span>
            </p>
          </div>
          <div className="col-xs-12 col-md-3">
            <p className="size-title-footer">
              <strong>Useful Link</strong>
            </p>
            <p className="pt-3 size-item-footer">Costumer Service</p>
            <ul className="list-footer">
              <li>
                <i class="fas fa-circle mr-3"></i>Help Desk
              </li>
              <li>
                <i class="fas fa-circle mr-3"></i>Forum
              </li>
              <li>
                <i class="fas fa-circle mr-3"></i>Staff Profile
              </li>
              <li>
                <i class="fas fa-circle mr-3"></i>Live Chat
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
