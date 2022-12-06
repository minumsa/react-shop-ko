import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkContent>
            <FooterLink href="https://accounts.kakao.com/login/?continue=http%3A%2F%2Fpf.kakao.com%2F_xbLcDxl%2Fchat">
              카카오톡 채팅상담
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/shopinfo/guide.html">
              온라인숍 이용안내
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/brand?cate_no=1123#none">
              1:1 문의
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/support/support.html">
              고객센터
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/shopinfo/benefit.html">
              혜택안내
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/shopinfo/delivery_return.html">
              교환 및 환불
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/cal">
              캘린더
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/about.html">
              회사소개
            </FooterLink>
            <FooterLink href="https://slowsteadyclub.com/store/original.html">
              매장안내
            </FooterLink>
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

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: ;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 16px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 10px;
  }
`;

const FooterLink = styled.a`
  color: black;
  font-size: 14px;
  width: 150px;
  margin-bottom: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
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
`;

export default Footer;
