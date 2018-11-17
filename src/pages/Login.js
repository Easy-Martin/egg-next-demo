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
                  
                </div>
            </Page>
        );
    }
}

export default withSSR()(Form.create()(LoginView));
