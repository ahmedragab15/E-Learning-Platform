import { User, Settings, Share2 } from "lucide-react";

export const ContactFormInputs: IContactInputs[] = [
  {
    name: "email",
    placeholder: "Email",
    label: "Email",
    type: "email",
  },
  {
    name: "subject",
    placeholder: "Subject",
    label: "Subject",
    type: "text",
  },
];

export const LoginFormInputs: ILoginInputs[] = [
  {
    name: "email",
    placeholder: "Enter your email",
    label: "Email",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Enter your password",
    label: "Password",
    type: "password",
  },
];

export const RegisterFormInputs: IRegisterInputs[] = [
  {
    name: "fullname",
    placeholder: "Enter your Full Name",
    label: "Full Name",
    type: "text",
  },
  {
    name: "username",
    placeholder: "Enter your Username",
    label: "Username",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Enter your Email",
    label: "Email",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Enter your Password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    placeholder: "Confirm your Password",
    label: "Confirm Password",
    type: "password",
  },
];

export const BillingFormInputs: IBaillingInputs[] = [
  {
    name: "firstName",
    placeholder: "John",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    placeholder: "Doe",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "john.doe@example.com",
    label: "Email",
    type: "text",
  },
  {
    name: "address",
    placeholder: "123 Main Street",
    label: "Address",
    type: "text",
  },
  {
    name: "country",
    placeholder: "Egypt",
    label: "Country",
    type: "text",
  },
  {
    name: "city",
    placeholder: "Cairo",
    label: "City",
    type: "text",
  },
  {
    name: "state",
    placeholder: "State",
    label: "State",
    type: "text",
  },
  {
    name: "zipCode",
    placeholder: "ZipCode",
    label: "ZipCode",
    type: "text",
  },
];

export const SettingsSidebarItems: SettingsSidebarItems[] = [
  {
    title: "Profile",
    href: "/account/settings",
    icon: User,
  },
  {
    title: "Account",
    href: "/account/settings/change-account",
    icon: Settings,
  },
  {
    title: "Social Media",
    href: "/account/settings/social",
    icon: Share2,
  },
];

export const ProfileSettingsFormInputs: IProfileSettingsInputs[] = [
  {
    name: "username",
    placeholder: "Change your username",
    label: "Username",
    type: "text",
  },
  {
    name: "fullname",
    placeholder: "Change your full name",
    label: "Full Name",
    type: "text",
  },
];

export const ChangeAccountFormInputs: IChangeAccountInputs[] = [
  {
    name: "email",
    placeholder: "Change your email",
    label: "Email",
    type: "email",
  },
  {
    name: "currentPassword",
    placeholder: "Enter your current password",
    label: "Current Password",
    type: "password",
  },
  {
    name: "newPassword",
    placeholder: "Enter your new password",
    label: "New Password",
    type: "password",
  },
  {
    name: "confirmNewPassword",
    placeholder: "Confirm your new password",
    label: "Confirm New Password",
    type: "password",
  },
];

export const SocialSettingsFormInputs: ISocialSettingsInputs[] = [
  {
    name: "website",
    placeholder: "Change your website",
    label: "Website",
    type: "text",
  },
  {
    name: "facebook",
    placeholder: "Change your facebook",
    label: "Facebook",
    type: "text",
  },
  {
    name: "github",
    placeholder: "Change your github",
    label: "Github",
    type: "text",
  },
  {
    name: "linkedin",
    placeholder: "Change your linkedin",
    label: "Linkedin",
    type: "text",
  },
];