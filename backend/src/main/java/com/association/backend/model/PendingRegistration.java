//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.model;

import java.time.LocalDateTime;
import lombok.Generated;

public class PendingRegistration {
    private String razorpayOrderId;
    private String fullName;
    private String email;
    private String phone;
    private String specialization;
    private String registrationNumber;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String notes;
    private LocalDateTime createdAt;
    private Integer amountPaid;

    public boolean isExpired() {
        return LocalDateTime.now().isAfter(this.createdAt.plusMinutes(15L));
    }

    @Generated
    public String getRazorpayOrderId() {
        return this.razorpayOrderId;
    }

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
    public LocalDateTime getCreatedAt() {
        return this.createdAt;
    }

    @Generated
    public Integer getAmountPaid() {
        return this.amountPaid;
    }

    @Generated
    public void setRazorpayOrderId(final String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
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
    public void setCreatedAt(final LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Generated
    public void setAmountPaid(final Integer amountPaid) {
        this.amountPaid = amountPaid;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof PendingRegistration)) {
            return false;
        } else {
            PendingRegistration other = (PendingRegistration)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$amountPaid = this.getAmountPaid();
                Object other$amountPaid = other.getAmountPaid();
                if (this$amountPaid == null) {
                    if (other$amountPaid != null) {
                        return false;
                    }
                } else if (!this$amountPaid.equals(other$amountPaid)) {
                    return false;
                }

                Object this$razorpayOrderId = this.getRazorpayOrderId();
                Object other$razorpayOrderId = other.getRazorpayOrderId();
                if (this$razorpayOrderId == null) {
                    if (other$razorpayOrderId != null) {
                        return false;
                    }
                } else if (!this$razorpayOrderId.equals(other$razorpayOrderId)) {
                    return false;
                }

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

                Object this$createdAt = this.getCreatedAt();
                Object other$createdAt = other.getCreatedAt();
                if (this$createdAt == null) {
                    if (other$createdAt != null) {
                        return false;
                    }
                } else if (!this$createdAt.equals(other$createdAt)) {
                    return false;
                }

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof PendingRegistration;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $amountPaid = this.getAmountPaid();
        result = result * 59 + ($amountPaid == null ? 43 : $amountPaid.hashCode());
        Object $razorpayOrderId = this.getRazorpayOrderId();
        result = result * 59 + ($razorpayOrderId == null ? 43 : $razorpayOrderId.hashCode());
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
        Object $createdAt = this.getCreatedAt();
        result = result * 59 + ($createdAt == null ? 43 : $createdAt.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        String var10000 = this.getRazorpayOrderId();
        return "PendingRegistration(razorpayOrderId=" + var10000 + ", fullName=" + this.getFullName() + ", email=" + this.getEmail() + ", phone=" + this.getPhone() + ", specialization=" + this.getSpecialization() + ", registrationNumber=" + this.getRegistrationNumber() + ", address=" + this.getAddress() + ", city=" + this.getCity() + ", state=" + this.getState() + ", pincode=" + this.getPincode() + ", notes=" + this.getNotes() + ", createdAt=" + String.valueOf(this.getCreatedAt()) + ", amountPaid=" + this.getAmountPaid() + ")";
    }

    @Generated
    public PendingRegistration() {
    }

    @Generated
    public PendingRegistration(final String razorpayOrderId, final String fullName, final String email, final String phone, final String specialization, final String registrationNumber, final String address, final String city, final String state, final String pincode, final String notes, final LocalDateTime createdAt, final Integer amountPaid) {
        this.razorpayOrderId = razorpayOrderId;
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
        this.createdAt = createdAt;
        this.amountPaid = amountPaid;
    }
}
