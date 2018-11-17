import React from "react";
import { withSSR } from "./_ssr";
import { Form, Button, Input } from "antd";
import IconFont from "../components/IconFont";
import Page from "../components/Page/index";
import "../style/login.scss";

const FormItem = Form.Item;

class LoginView extends React.Component {
    state = {
        loginLoading: false
    };
    submitEvent (event){
        console.log(event);
    }
    render() {
        let { loginLoading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Page className="user_login_view">
                <div className="top-part">
                    <div className="login-title"></div>
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
                    <Form
                        size="large"
                        onSubmit={(...args) => this.submitEvent(...args)}
                    >
                        <FormItem label="用户名">
                            {getFieldDecorator("loginName", {
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
                                                type={
                                                    "icon-TreeIcon_People_Main2"
                                                }
                                                style={{
                                                    fontSize: "24px",
                                                    color: "#8899bb"
                                                }}
                                                theme="outlined"
                                            />
                                        }
                                        autoComplete="off"
                                        name="user"
                                        placeholder={"请输入用户名或手机号"}
                                    />
                                </div>
                            )}
                        </FormItem>
                        <FormItem label="密码">
                            {getFieldDecorator("userPwd", {
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
                                                type={"icon-PassWord_Light"}
                                                style={{
                                                    fontSize: "24px",
                                                    color: "#8899bb"
                                                }}
                                                theme="outlined"
                                            />
                                        }
                                        autoComplete="new-password"
                                        name="password"
                                        type="password"
                                        placeholder={"请输入密码"}
                                    />
                                </div>
                            )}
                        </FormItem>
                        <FormItem className="login-btn-con">
                            <Button
                                loading={loginLoading}
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="login-btn mt10"
                            >
                                {"登录"}
                            </Button>
                        </FormItem>
                    </Form>
                </div>
                <div className="footer-part">
                    {/* <div className="login_footer_box">
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
                            Copyright 2016-2018 深圳羚羊极速科技有限公司
                            版权所有 粤ICP备16124741号-1
                        </p>
                    </div> */}
                </div>
            </Page>
        );
    }
}

export default withSSR()(Form.create()(LoginView));
