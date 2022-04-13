import React from 'react'
import { Link } from 'react-router-dom'
import './Index.scss'
import BorderBottomInput from '../../components/BorderBottomInput/Index'
import CheckBox from '../../components/Checkbox/Index'
import Button from '../../components/Button/Index'

const IndexPage = () => {
  return (
    <div className="index-page flex w-full overflow-x-hidden overflow-y-hidden">
      <section className="index-page__photo-section">
        <picture>
          <source
            srcSet="images/signup-page.webp"
            type="image/webp"
          />
          <source
            srcSet="images/signup-page.png"
            type="image/png"
          />
          <img
            src="/images/signup-page.png"
            alt="Depicting Lady smiling on the left hand side the signup page"
            className="index-page__signup-page-img h-screen"
          />
        </picture>
        <h1 className="index-page__photo-section-text text-white">
          Building exceptional services with Back Office Support and Business Perfomance
        </h1>
      </section>
      <section className="index-page__signup-details-section">
        <form className="index-page__signup-form">
          <h1 className="index-page__heading--main text-primary font-bold">Create Account</h1>
          <h2 className="index-page__heading--sub text-primary text-dark-grey-1 mb-16">
            Build an exceptional business
          </h2>

          <div className="index-page__flex-inputs-container flex justify-between mb-12">
            <BorderBottomInput 
              inputContainerClass="index-page__flex-input-container" 
              label="First Name" 
              value="Ogoluwa"
              className="min-w-full"
            />
            <BorderBottomInput 
              inputContainerClass="index-page__flex-input-container" 
              label="Last Name" 
              placeholder="Enter your last name"
              className="min-w-full"
            />
          </div>
          <BorderBottomInput 
            inputContainerClass="flex-1 mb-12" 
            label="Phone Number" 
            placeholder="Enter your phone number"
            className="min-w-full"
          />
          <BorderBottomInput 
            inputContainerClass="flex-1 mb-12" 
            label="Email Address" 
            placeholder="Enter your email"
            className="min-w-full"
          />
          <BorderBottomInput 
            inputContainerClass="flex-1 mb-12" 
            label="Password" 
            placeholder="Enter your password"
            className="min-w-full"
          />
          <div className="flex items-center justify-between mb-12">
            <CheckBox 
              label="Remember me" 
              className="index-page__checkbox"
              inputContainerClass="index-page__checkbox-container"
            />

            <Link to="/" className="index-page__forgot-password-text text-light-blue-1">
              Forgot Password?
            </Link>
          </div>
          <Button className="index-page__btn mb-12">
            Sign Up
          </Button>

          <div className="index-page__form-bottom text-center flex items-center justify-center">
            <div className="index-page__form-bottom__line index-page__form-bottom__line--left"></div>
            <span className="index-page__form-bottom__text text-light-purple-1">
              Got an Account?</span>
              <Link to="/" className="ml-3 text-light-blue-1">
                Sign In
              </Link>
              <div className="index-page__form-bottom__line index-page__form-bottom__line--right"></div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default IndexPage