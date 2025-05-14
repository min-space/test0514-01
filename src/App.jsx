import kakao from './assets/kakao.svg'
import naver from './assets/naver.svg'
import google from './assets/google.svg'
import './App.css'

function App() {

  return (
    <> 
      
      <div className="wrap">
        <h1><img src="/logo.png" alt="부산IT교육센터" /></h1>

        <form>
          <fieldset>
            <legend>회원 로그인</legend>
            <div className="input-box">
              <input type="text" placeholder='아이디입력' />
              <input type="password" placeholder='비밀번호 입력' />
              <button type='submit'>로그인</button>
            </div>
            <div className="find-join">
              <a href="#">비밀번호 찾기</a>
              <a href="#">회원가입</a>
            </div>
          </fieldset>
        </form>
        <div className="sns-login">
          <p>SNS 계정으로 로그인</p>
          <ul>
            <li><a href="#"><img src={kakao} alt="카카오" /></a></li>
            <li><a href="#"><img src={naver} alt="네이버" /></a></li>
            <li><a href="#"><img src={google} alt="구글" /></a></li>
          </ul>
        </div>
      </div>

    </> 
  )
}

export default App
