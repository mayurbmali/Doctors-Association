package com.association.backend.model;

import java.time.LocalDateTime;
import java.util.Date;
import lombok.Generated;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(
        collection = "members"
)
public class Member {
    @Id
    private String id;
    private String fullName;
    @Indexed(
            unique = true
    )
    private String email;
    private String phone;
    private String specialization;
    private String registrationNumber;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String razorpayOrderId;
    private String razorpayPaymentId;
    private String razorpaySignature;
    private Integer amountPaid;
    private String paymentStatus;
    private LocalDateTime paymentDate;
    @Indexed(
            unique = true
    )
    private String membershipId;
    private LocalDateTime membershipStartDate;
    private LocalDateTime membershipEndDate;
    private Boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @Indexed(expireAfter = "0s") // Expire immediately when expiresAt time is reached
    private Date expiresAt;
    private String notes;

    @Generated
    public String getId() {
        return this.id;
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
    public String getRazorpayOrderId() {
        return this.razorpayOrderId;
    }

    @Generated
    public String getRazorpayPaymentId() {
        return this.razorpayPaymentId;
    }

    @Generated
    public String getRazorpaySignature() {
        return this.razorpaySignature;
    }

    @Generated
    public Integer getAmountPaid() {
        return this.amountPaid;
    }

    @Generated
    public String getPaymentStatus() {
        return this.paymentStatus;
    }

    @Generated
    public LocalDateTime getPaymentDate() {
        return this.paymentDate;
    }

    @Generated
    public String getMembershipId() {
        return this.membershipId;
    }

    @Generated
    public LocalDateTime getMembershipStartDate() {
        return this.membershipStartDate;
    }

    @Generated
    public LocalDateTime getMembershipEndDate() {
        return this.membershipEndDate;
    }

    @Generated
    public Boolean getActive() {
        return this.active;
    }

    @Generated
    public LocalDateTime getCreatedAt() {
        return this.createdAt;
    }

    @Generated
    public LocalDateTime getUpdatedAt() {
        return this.updatedAt;
    }

    @Generated
    public Date getExpiresAt() {
        return this.expiresAt;
    }

    @Generated
    public String getNotes() {
        return this.notes;
    }

    @Generated
    public void setId(final String id) {
        this.id = id;
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
    public void setRazorpayOrderId(final String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
    }

    @Generated
    public void setRazorpayPaymentId(final String razorpayPaymentId) {
        this.razorpayPaymentId = razorpayPaymentId;
    }

    @Generated
    public void setRazorpaySignature(final String razorpaySignature) {
        this.razorpaySignature = razorpaySignature;
    }

    @Generated
    public void setAmountPaid(final Integer amountPaid) {
        this.amountPaid = amountPaid;
    }

    @Generated
    public void setPaymentStatus(final String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    @Generated
    public void setPaymentDate(final LocalDateTime paymentDate) {
        this.paymentDate = paymentDate;
    }

    @Generated
    public void setMembershipId(final String membershipId) {
        this.membershipId = membershipId;
    }

    @Generated
    public void setMembershipStartDate(final LocalDateTime membershipStartDate) {
        this.membershipStartDate = membershipStartDate;
    }

    @Generated
    public void setMembershipEndDate(final LocalDateTime membershipEndDate) {
        this.membershipEndDate = membershipEndDate;
    }

    @Generated
    public void setActive(final Boolean active) {
        this.active = active;
    }

    @Generated
    public void setCreatedAt(final LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Generated
    public void setUpdatedAt(final LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Generated
    public void setExpiresAt(final Date expiresAt) {
        this.expiresAt = expiresAt;
    }

    @Generated
    public void setNotes(final String notes) {
        this.notes = notes;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Member)) {
            return false;
        } else {
            Member other = (Member)o;
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

                Object this$active = this.getActive();
                Object other$active = other.getActive();
                if (this$active == null) {
                    if (other$active != null) {
                        return false;
                    }
                } else if (!this$active.equals(other$active)) {
                    return false;
                }

                Object this$id = this.getId();
                Object other$id = other.getId();
                if (this$id == null) {
                    if (other$id != null) {
                        return false;
                    }
                } else if (!this$id.equals(other$id)) {
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

                Object this$razorpayOrderId = this.getRazorpayOrderId();
                Object other$razorpayOrderId = other.getRazorpayOrderId();
                if (this$razorpayOrderId == null) {
                    if (other$razorpayOrderId != null) {
                        return false;
                    }
                } else if (!this$razorpayOrderId.equals(other$razorpayOrderId)) {
                    return false;
                }

                Object this$razorpayPaymentId = this.getRazorpayPaymentId();
                Object other$razorpayPaymentId = other.getRazorpayPaymentId();
                if (this$razorpayPaymentId == null) {
                    if (other$razorpayPaymentId != null) {
                        return false;
                    }
                } else if (!this$razorpayPaymentId.equals(other$razorpayPaymentId)) {
                    return false;
                }

                Object this$razorpaySignature = this.getRazorpaySignature();
                Object other$razorpaySignature = other.getRazorpaySignature();
                if (this$razorpaySignature == null) {
                    if (other$razorpaySignature != null) {
                        return false;
                    }
                } else if (!this$razorpaySignature.equals(other$razorpaySignature)) {
                    return false;
                }

                Object this$paymentStatus = this.getPaymentStatus();
                Object other$paymentStatus = other.getPaymentStatus();
                if (this$paymentStatus == null) {
                    if (other$paymentStatus != null) {
                        return false;
                    }
                } else if (!this$paymentStatus.equals(other$paymentStatus)) {
                    return false;
                }

                Object this$paymentDate = this.getPaymentDate();
                Object other$paymentDate = other.getPaymentDate();
                if (this$paymentDate == null) {
                    if (other$paymentDate != null) {
                        return false;
                    }
                } else if (!this$paymentDate.equals(other$paymentDate)) {
                    return false;
                }

                Object this$membershipId = this.getMembershipId();
                Object other$membershipId = other.getMembershipId();
                if (this$membershipId == null) {
                    if (other$membershipId != null) {
                        return false;
                    }
                } else if (!this$membershipId.equals(other$membershipId)) {
                    return false;
                }

                Object this$membershipStartDate = this.getMembershipStartDate();
                Object other$membershipStartDate = other.getMembershipStartDate();
                if (this$membershipStartDate == null) {
                    if (other$membershipStartDate != null) {
                        return false;
                    }
                } else if (!this$membershipStartDate.equals(other$membershipStartDate)) {
                    return false;
                }

                Object this$membershipEndDate = this.getMembershipEndDate();
                Object other$membershipEndDate = other.getMembershipEndDate();
                if (this$membershipEndDate == null) {
                    if (other$membershipEndDate != null) {
                        return false;
                    }
                } else if (!this$membershipEndDate.equals(other$membershipEndDate)) {
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

                Object this$updatedAt = this.getUpdatedAt();
                Object other$updatedAt = other.getUpdatedAt();
                if (this$updatedAt == null) {
                    if (other$updatedAt != null) {
                        return false;
                    }
                } else if (!this$updatedAt.equals(other$updatedAt)) {
                    return false;
                }

                Object this$expiresAt = this.getExpiresAt();
                Object other$expiresAt = other.getExpiresAt();
                if (this$expiresAt == null) {
                    if (other$expiresAt != null) {
                        return false;
                    }
                } else if (!this$expiresAt.equals(other$expiresAt)) {
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
        return other instanceof Member;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        Object $amountPaid = this.getAmountPaid();
        result = result * 59 + ($amountPaid == null ? 43 : $amountPaid.hashCode());
        Object $active = this.getActive();
        result = result * 59 + ($active == null ? 43 : $active.hashCode());
        Object $id = this.getId();
        result = result * 59 + ($id == null ? 43 : $id.hashCode());
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
        Object $razorpayOrderId = this.getRazorpayOrderId();
        result = result * 59 + ($razorpayOrderId == null ? 43 : $razorpayOrderId.hashCode());
        Object $razorpayPaymentId = this.getRazorpayPaymentId();
        result = result * 59 + ($razorpayPaymentId == null ? 43 : $razorpayPaymentId.hashCode());
        Object $razorpaySignature = this.getRazorpaySignature();
        result = result * 59 + ($razorpaySignature == null ? 43 : $razorpaySignature.hashCode());
        Object $paymentStatus = this.getPaymentStatus();
        result = result * 59 + ($paymentStatus == null ? 43 : $paymentStatus.hashCode());
        Object $paymentDate = this.getPaymentDate();
        result = result * 59 + ($paymentDate == null ? 43 : $paymentDate.hashCode());
        Object $membershipId = this.getMembershipId();
        result = result * 59 + ($membershipId == null ? 43 : $membershipId.hashCode());
        Object $membershipStartDate = this.getMembershipStartDate();
        result = result * 59 + ($membershipStartDate == null ? 43 : $membershipStartDate.hashCode());
        Object $membershipEndDate = this.getMembershipEndDate();
        result = result * 59 + ($membershipEndDate == null ? 43 : $membershipEndDate.hashCode());
        Object $createdAt = this.getCreatedAt();
        result = result * 59 + ($createdAt == null ? 43 : $createdAt.hashCode());
        Object $updatedAt = this.getUpdatedAt();
        result = result * 59 + ($updatedAt == null ? 43 : $updatedAt.hashCode());
        Object $expiresAt = this.getExpiresAt();
        result = result * 59 + ($expiresAt == null ? 43 : $expiresAt.hashCode());
        Object $notes = this.getNotes();
        result = result * 59 + ($notes == null ? 43 : $notes.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        String var10000 = this.getId();
        return "Member(id=" + var10000 + ", fullName=" + this.getFullName() + ", email=" + this.getEmail() + ", phone=" + this.getPhone() + ", specialization=" + this.getSpecialization() + ", registrationNumber=" + this.getRegistrationNumber() + ", address=" + this.getAddress() + ", city=" + this.getCity() + ", state=" + this.getState() + ", pincode=" + this.getPincode() + ", razorpayOrderId=" + this.getRazorpayOrderId() + ", razorpayPaymentId=" + this.getRazorpayPaymentId() + ", razorpaySignature=" + this.getRazorpaySignature() + ", amountPaid=" + this.getAmountPaid() + ", paymentStatus=" + this.getPaymentStatus() + ", paymentDate=" + String.valueOf(this.getPaymentDate()) + ", membershipId=" + this.getMembershipId() + ", membershipStartDate=" + String.valueOf(this.getMembershipStartDate()) + ", membershipEndDate=" + String.valueOf(this.getMembershipEndDate()) + ", active=" + this.getActive() + ", createdAt=" + String.valueOf(this.getCreatedAt()) + ", updatedAt=" + String.valueOf(this.getUpdatedAt()) + ", expiresAt=" + String.valueOf(this.getExpiresAt()) + ", notes=" + this.getNotes() + ")";
    }

    @Generated
    public Member() {
    }

    @Generated
    public Member(final String id, final String fullName, final String email, final String phone, final String specialization, final String registrationNumber, final String address, final String city, final String state, final String pincode, final String razorpayOrderId, final String razorpayPaymentId, final String razorpaySignature, final Integer amountPaid, final String paymentStatus, final LocalDateTime paymentDate, final String membershipId, final LocalDateTime membershipStartDate, final LocalDateTime membershipEndDate, final Boolean active, final LocalDateTime createdAt, final LocalDateTime updatedAt, final Date expiresAt, final String notes) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.specialization = specialization;
        this.registrationNumber = registrationNumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.razorpayOrderId = razorpayOrderId;
        this.razorpayPaymentId = razorpayPaymentId;
        this.razorpaySignature = razorpaySignature;
        this.amountPaid = amountPaid;
        this.paymentStatus = paymentStatus;
        this.paymentDate = paymentDate;
        this.membershipId = membershipId;
        this.membershipStartDate = membershipStartDate;
        this.membershipEndDate = membershipEndDate;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.expiresAt = expiresAt;
        this.notes = notes;
    }
}
