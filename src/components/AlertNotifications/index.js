// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const successNotification = () => (
    <Notification>
      <div className="container">
        <AiFillCheckCircle className="icon success" />
        <div className="content-container">
          <h1 className="heading success">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
  )

  const errorNotification = () => (
    <Notification>
      <div className="container">
        <RiErrorWarningFill className="icon error" />
        <div className="content-container">
          <h1 className="heading error">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const warningNotification = () => (
    <Notification>
      <div className="container">
        <MdWarning className="icon warning" />
        <div className="content-container">
          <h1 className="heading warning">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const infoNotification = () => (
    <Notification>
      <div className="container">
        <MdInfo className="icon info" />
        <div className="content-container">
          <h1 className="heading info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="bg-container">
      <h1 className="main-heading">Alert Notifications</h1>
      <div className="card-container">
        {successNotification()}
        {errorNotification()}
        {warningNotification()}
        {infoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
