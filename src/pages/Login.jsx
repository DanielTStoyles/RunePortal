/** @format */

import React, { Component } from "react";

class LoginPage extends Component {
  state = {
    credentials: { email: "", password: "" },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      credentials: {
        ...prevState.credentials,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.credentials);
  };

  render() {
    const { email, password } = this.state.credentials;

    return (
      <div
        className="min-h-screen bg-[url(https://www.runescape.com/l=1/img/rsp777/bg2.jpg)] bg-repeat-y bg-center bg-top mx-auto 
      overflow-y-hidden px-012 flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-lime-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-lime-600 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-lime-400 text-md font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-lime-600"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
