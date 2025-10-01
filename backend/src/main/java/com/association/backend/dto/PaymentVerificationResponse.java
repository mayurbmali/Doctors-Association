//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.association.backend.dto;

import lombok.Generated;

public class PaymentVerificationResponse {
    private boolean success;
    private String message;
    private String membershipId;
    private String memberName;
    private String email;

    @Generated
    public boolean isSuccess() {
        return this.success;
    }

    @Generated
    public String getMessage() {
        return this.message;
    }

    @Generated
    public String getMembershipId() {
        return this.membershipId;
    }

    @Generated
    public String getMemberName() {
        return this.memberName;
    }

    @Generated
    public String getEmail() {
        return this.email;
    }

    @Generated
    public void setSuccess(final boolean success) {
        this.success = success;
    }

    @Generated
    public void setMessage(final String message) {
        this.message = message;
    }

    @Generated
    public void setMembershipId(final String membershipId) {
        this.membershipId = membershipId;
    }

    @Generated
    public void setMemberName(final String memberName) {
        this.memberName = memberName;
    }

    @Generated
    public void setEmail(final String email) {
        this.email = email;
    }

    @Generated
    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof PaymentVerificationResponse)) {
            return false;
        } else {
            PaymentVerificationResponse other = (PaymentVerificationResponse)o;
            if (!other.canEqual(this)) {
                return false;
            } else if (this.isSuccess() != other.isSuccess()) {
                return false;
            } else {
                Object this$message = this.getMessage();
                Object other$message = other.getMessage();
                if (this$message == null) {
                    if (other$message != null) {
                        return false;
                    }
                } else if (!this$message.equals(other$message)) {
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

                Object this$memberName = this.getMemberName();
                Object other$memberName = other.getMemberName();
                if (this$memberName == null) {
                    if (other$memberName != null) {
                        return false;
                    }
                } else if (!this$memberName.equals(other$memberName)) {
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

                return true;
            }
        }
    }

    @Generated
    protected boolean canEqual(final Object other) {
        return other instanceof PaymentVerificationResponse;
    }

    @Generated
    public int hashCode() {
        int PRIME = 59;
        int result = 1;
        result = result * 59 + (this.isSuccess() ? 79 : 97);
        Object $message = this.getMessage();
        result = result * 59 + ($message == null ? 43 : $message.hashCode());
        Object $membershipId = this.getMembershipId();
        result = result * 59 + ($membershipId == null ? 43 : $membershipId.hashCode());
        Object $memberName = this.getMemberName();
        result = result * 59 + ($memberName == null ? 43 : $memberName.hashCode());
        Object $email = this.getEmail();
        result = result * 59 + ($email == null ? 43 : $email.hashCode());
        return result;
    }

    @Generated
    public String toString() {
        boolean var10000 = this.isSuccess();
        return "PaymentVerificationResponse(success=" + var10000 + ", message=" + this.getMessage() + ", membershipId=" + this.getMembershipId() + ", memberName=" + this.getMemberName() + ", email=" + this.getEmail() + ")";
    }

    @Generated
    public PaymentVerificationResponse() {
    }

    @Generated
    public PaymentVerificationResponse(final boolean success, final String message, final String membershipId, final String memberName, final String email) {
        this.success = success;
        this.message = message;
        this.membershipId = membershipId;
        this.memberName = memberName;
        this.email = email;
    }
}
