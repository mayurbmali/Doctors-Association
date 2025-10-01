//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Generated;

public class MembershipRegistrationRequest {
    private @NotBlank(
            message = "Full name is required"
    ) @Size(
            min = 3,
            max = 100,
            message = "Name must be between 3 and 100 characters"
    ) String fullName;
    private @NotBlank(
            message = "Email is required"
    ) @Email(
            message = "Please provide a valid email"
    ) String email;
    private @NotBlank(
            message = "Phone number is required"
    ) @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Please provide a valid 10-digit Indian phone number"
    ) String phone;
    private @NotBlank(
            message = "Specialization is required"
    ) String specialization;
    private @NotBlank(
            message = "Medical registration number is required"
    ) String registrationNumber;
    private @NotBlank(
            message = "Address is required"
    ) String address;
    private @NotBlank(
            message = "City is required"
    ) String city;
    private @NotBlank(
            message = "State is required"
    ) String state;
    private @NotBlank(
            message = "Pincode is required"
    ) @Pattern(
            regexp = "^\\d{6}$",
            message = "Please provide a valid 6-digit pincode"
    ) String pincode;
    private String notes;

    @Generated
    public String getFullName() {
        return this.fullName;
    }

    @Generated
    public String getEmail() {
        return this.email;
    }

    @Generated
    public String getPhone() {
        return this.phone;
    }

    @Generated
    public String getSpecialization() {
        return this.specialization;
    }

    @Generated
    public String getRegistrationNumber() {
        return this.registrationNumber;
    }

    @Generated
    public String getAddress() {
        return this.address;
    }

    @Generated
    public String getCity() {
        return this.city;
    }

    @Generated
    public String getState() {
        return this.state;
    }

    @Generated
    public String getPincode() {
        return this.pincode;
    }

    @Generated
    public String getNotes() {
        return this.notes;
    }

    @Generated
    public void setFullName(final String fullName) {
        this.fullName = fullName;
    }

    @Generated
    public void setEmail(final String email) {
        this.email = email;
    }

    @Generated
    public void setPhone(final String phone) {
        this.phone = phone;
    }

    @Generated
    public void setSpecialization(final String specialization) {
        this.specialization = specialization;
    }

    @Generated
    public void setRegistrationNumber(final String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    @Generated
    public void setAddress(final String address) {
        this.address = address;
    }

    @Generated
    public void setCity(final String city) {
        this.city = city;
    }

    @Generated
    public void setState(final String state) {
        this.state = state;
    }

    @Generated
    public void setPincode(final String pincode) {
        this.pincode = pincode;
    }

    @Generated
    public void setNotes(final String notes) {
        this.notes = notes;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof MembershipRegistrationRequest)) {
            return false;
        } else {
            MembershipRegistrationRequest other = (MembershipRegistrationRequest)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$fullName = this.getFullName();
                Object other$fullName = other.getFullName();
                if (this$fullName == null) {
                    if (other$fullName != null) {
                        return false;
                    }
                } else if (!this$fullName.equals(other$fullName)) {
                    return false;
                }

                Object this$email = this.getEmail();
                Object other$email = other.getEmail();
                if (this$email == null) {
                    if (other$email != null) {
                        return false;
                    }
                } else if (!this$email.equals(other$email)) {
                    return false;
                }

                Object this$phone = this.getPhone();
                Object other$phone = other.getPhone();
                if (this$phone == null) {
                    if (other$phone != null) {
                        return false;
                    }
                } else if (!this$phone.equals(other$phone)) {
                    return false;
                }

                Object this$specialization = this.getSpecialization();
                Object other$specialization = other.getSpecialization();
                if (this$specialization == null) {
                    if (other$specialization != null) {
                        return false;
                    }
                } else if (!this$specialization.equals(other$specialization)) {
                    return false;
                }

                Object this$registrationNumber = this.getRegistrationNumber();
                Object other$registrationNumber = other.getRegistrationNumber();
                if (this$registrationNumber == null) {
                    if (other$registrationNumber != null) {
                        return false;
                    }
                } else if (!this$registrationNumber.equals(other$registrationNumber)) {
                    return false;
                }

                Object this$address = this.getAddress();
                Object other$address = other.getAddress();
                if (this$address == null) {
                    if (other$address != null) {
                        return false;
                    }
                } else if (!this$address.equals(other$address)) {
                    return false;
                }

                Object this$city = this.getCity();
                Object other$city = other.getCity();
                if (this$city == null) {
                    if (other$city != null) {
                        return false;
                    }
                } else if (!this$city.equals(other$city)) {
                    return false;
                }

                Object this$state = this.getState();
                Object other$state = other.getState();
                if (this$state == null) {
                    if (other$state != null) {
                        return false;
                    }
                } else if (!this$state.equals(other$state)) {
                    return false;
                }

                Object this$pincode = this.getPincode();
                Object other$pincode = other.getPincode();
                if (this$pincode == null) {
                    if (other$pincode != null) {
                        return false;
                    }
                } else if (!this$pincode.equals(other$pincode)) {
                    return false;
                }

                Object this$notes = this.getNotes();
                Object other$notes = other.getNotes();
                if (this$notes == null) {
                    if (other$notes != null) {
                        return false;
                    }
                } else if (!this$notes.equals(other$notes)) {
                    return false;
                }

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof MembershipRegistrationRequest;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $fullName = this.getFullName();
        result = result * 59 + ($fullName == null ? 43 : $fullName.hashCode());
        Object $email = this.getEmail();
        result = result * 59 + ($email == null ? 43 : $email.hashCode());
        Object $phone = this.getPhone();
        result = result * 59 + ($phone == null ? 43 : $phone.hashCode());
        Object $specialization = this.getSpecialization();
        result = result * 59 + ($specialization == null ? 43 : $specialization.hashCode());
        Object $registrationNumber = this.getRegistrationNumber();
        result = result * 59 + ($registrationNumber == null ? 43 : $registrationNumber.hashCode());
        Object $address = this.getAddress();
        result = result * 59 + ($address == null ? 43 : $address.hashCode());
        Object $city = this.getCity();
        result = result * 59 + ($city == null ? 43 : $city.hashCode());
        Object $state = this.getState();
        result = result * 59 + ($state == null ? 43 : $state.hashCode());
        Object $pincode = this.getPincode();
        result = result * 59 + ($pincode == null ? 43 : $pincode.hashCode());
        Object $notes = this.getNotes();
        result = result * 59 + ($notes == null ? 43 : $notes.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        String var10000 = this.getFullName();
        return "MembershipRegistrationRequest(fullName=" + var10000 + ", email=" + this.getEmail() + ", phone=" + this.getPhone() + ", specialization=" + this.getSpecialization() + ", registrationNumber=" + this.getRegistrationNumber() + ", address=" + this.getAddress() + ", city=" + this.getCity() + ", state=" + this.getState() + ", pincode=" + this.getPincode() + ", notes=" + this.getNotes() + ")";
    }

    @Generated
    public MembershipRegistrationRequest() {
    }

    @Generated
    public MembershipRegistrationRequest(final String fullName, final String email, final String phone, final String specialization, final String registrationNumber, final String address, final String city, final String state, final String pincode, final String notes) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.specialization = specialization;
        this.registrationNumber = registrationNumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.notes = notes;
    }
}
