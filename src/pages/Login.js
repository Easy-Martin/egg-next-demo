import React from 'react';
import { withSSR } from './_ssr';
import { Form, Button, Input, Tabs, Icon } from 'antd';
import IconFont from '../components/IconFont';
import Page from '../components/Page/index';
import '../style/login.scss';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class LoginView extends React.Component {
  state = {
    changePwdVisible: false,
    //登录方式,: 默认账号密码登录, false:手机验证码登录
    activeTab: '1',
    loginLoading: false,
    videoKey: Math.random()
  };
  closeChangePwdMark = () => {
    this.setState({
      changePwdVisible: false
    });
  };

  tabChange = value => {
    this.setState({
      activeTab: value
    });
  };
  render() {
    let { activeTab, loginLoading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <Page className="user_login_view">
        <div className="top-part">
          <div className="login-title">智慧云眼</div>
          <video
            muted
            width="100%"
            height="auto"
            src="/static/video.mp4"
            autoPlay
            loop
          />
          <div className="line-top" />
        </div>
        <div className="content-part">
          <Tabs
            defaultActiveKey="1"
            activeKey={activeTab}
            size="large"
            onChange={this.tabChange}
            tabBarStyle={{
              textAlign: 'center',
              color: '#666',
              fontSize: '14px'
            }}
          >
            <TabPane tab="用户名登录" key="1">
              <div className="tab_box_pass">
                {activeTab == 1 && (
                  <Form size="large" onSubmit={this.submitEvent}>
                    <FormItem label="用户名">
                      {getFieldDecorator('loginName', {
                        rules: [
                          {
                            required: true,
                            message: `请输入用户名或手机号`
                          }
                        ]
                      })(
                        <div>
                          <Input
                            prefix={
                              <IconFont
                                type={'icon-TreeIcon_People_Main2'}
                                style={{ fontSize: '24px', color: '#8899bb' }}
                                theme="outlined"
                              />
                            }
                            autoComplete="off"
                            name="user"
                            placeholder={'请输入用户名或手机号'}
                          />
                        </div>
                      )}
                    </FormItem>
                    <FormItem label="密码">
                      {getFieldDecorator('userPwd', {
                        rules: [
                          {
                            required: true,
                            message: `密码是必填项`
                          }
                        ]
                      })(
                        <div>
                          <Input
                            prefix={
                              <IconFont
                                type={'icon-PassWord_Light'}
                                style={{ fontSize: '24px', color: '#8899bb' }}
                                theme="outlined"
                              />
                            }
                            autoComplete="new-password"
                            name="password"
                            type="password"
                            placeholder={'请输入密码'}
                          />
                        </div>
                      )}
                    </FormItem>
                    <Form.Item className="login-btn-con">
                      <Button
                        loading={loginLoading}
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="login-btn mt10"
                      >
                        {'登录'}
                      </Button>
                    </Form.Item>
                  </Form>
                )}
              </div>
            </TabPane>
            <TabPane tab="验证码登录" key="2">
              <div className="tab_box_number">
                {activeTab == 2 && (
                  <Form size="large" onSubmit={this.submitEvent}>
                    <FormItem label="手机号">
                      {getFieldDecorator('phoneNum', {
                        initialValue:
                          this.state.phoneNum && this.state.phoneNum,
                        rules: [
                          {
                            required: true,
                            message: `请输入手机号`
                          },
                          {
                            validator(rule, value, callback, source, options) {
                              var errors = [];
                              if (
                                !/^((1[3,5,7,8,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
                                  value
                                ) &&
                                value
                              ) {
                                errors[0] = '请输入正确的手机号码';
                              }
                              callback(errors);
                            }
                          }
                        ]
                      })(
                        <div>
                          <Input
                            prefix={
                              <IconFont
                                type={'icon-Phone_Light'}
                                style={{ fontSize: '24px', color: '#8899bb' }}
                                theme="outlined"
                              />
                            }
                            autoComplete="off"
                            name="phoneNum"
                            placeholder={'请输入手机号'}
                          />
                        </div>
                      )}
                    </FormItem>
                    <FormItem label="验证码">
                      {getFieldDecorator('identifyCode', {
                        rules: [
                          {
                            required: true,
                            message: `请输入验证码`
                          }
                        ]
                      })(
                        <div className="login_info_message">
                          <Input
                            prefix={
                              <IconFont
                                style={{ fontSize: '24px', color: '#8899bb' }}
                                type={'icon-PhoneNum_Light'}
                                theme="outlined"
                              />
                            }
                            autoComplete="new-password"
                            name="identifyCode"
                            type="text"
                            placeholder={'请输入验证码'}
                          />
                        </div>
                      )}
                    </FormItem>
                    <Form.Item className="login-btn-con">
                      <Button
                        size="large"
                        type="primary"
                        loading={loginLoading}
                        htmlType="submit"
                        className="login-btn mt10"
                      >
                        {'登录'}
                      </Button>
                    </Form.Item>
                  </Form>
                )}
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className="footer-part">
          <div className="login_footer_box">
            <div className="img_box">
              <span className="footer_img" />
              <span className="footer_img" />
            </div>
            <p className="footer_text">
              为获得最佳使用体验，建议使用谷歌浏览器最新版，并在分辨率为1920×1080的显示器上显示
              <a
                className="footer-logo-google-link"
                target="_blank"
                href="https://www.google.cn/chrome/"
                rel="noopener noreferrer"
              >
                下载Chrome浏览器
              </a>
              <br />
              Copyright 2016-2018 深圳羚羊极速科技有限公司 版权所有
              粤ICP备16124741号-1
            </p>
          </div>
        </div>
      </Page>
    );
  }
}

export default withSSR()(Form.create()(LoginView));
