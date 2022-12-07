import React from 'react';
import styled from 'styled-components';
import './Footer.css';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkContent>
            <div class="footer-logo">
              <img src="https://slowsteadyclub.com/web/baton/images/logo/ssc_footer_logo.png"></img>
            </div>
            <div>
              <h4>CS CENTER</h4>
              <ul>
                <li>문의 02-745-7401</li>
                <li>평일 10:00-18:00</li>
                <li>점심시간 12:30-13:30</li>
              </ul>
            </div>
            <div>
              <h4>CONTACT</h4>
              <ul>
                <li>
                  <FooterLink href="https://accounts.kakao.com/login/?continue=http%3A%2F%2Fpf.kakao.com%2F_xbLcDxl%2Fchat">
                    카카오톡 채팅상담
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/shopinfo/guide.html">
                    온라인숍 이용안내
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/brand?cate_no=1123#none">
                    1:1 문의
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4>HELP</h4>
              <ul>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/support/support.html">
                    고객센터
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/shopinfo/benefit.html">
                    혜택안내
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/shopinfo/delivery_return.html">
                    교환 및 환불
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4>MENU</h4>
              <ul>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/cal">
                    캘린더
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/about.html">
                    회사소개
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://slowsteadyclub.com/store/original.html">
                    매장안내
                  </FooterLink>
                </li>
              </ul>
            </div>
          </FooterLinkContent>
          <FooterDescContainter>
            <FooterDescRights>
              COPYRIGHT ⓒ BENEDEF, ALL RIGHTS RESERVED.
            </FooterDescRights>
          </FooterDescContainter>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 1001px) {
    border-top: none;
    padding: 20px 20px;
  }
`;

const FooterContent = styled.div`
  @media (max-width: 1001px) {
    display: none;
  }
`;

const FooterLinkContainer = styled.div`
  width: 800px;

  @media (max-width: 1001px) {
    width: 100%;
  }
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 15px;

  @media (max-width: 1001px) {
    margin-top: 25px;
    margin-bottom: 10px;
  }
`;

const FooterLink = styled.a`
  color: black;
  width: 150px;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainter = styled.div`
  margin-top: 30px @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: #999999;
  font-size: 10px;
  text-align: center;
  margin-top: 30px;
`;

export default Footer;
