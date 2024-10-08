package com.leilao.backend.model;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Entity
@Table(name = "person")
@Data
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Preenchimento obrigátorio")
    private String name;
    @Email(message = "Email Inválido")
    private String email;
    @JsonIgnore
    private String password;
    @JsonIgnore
    @Column(name = "validation_code")
    private String validationCode;
    private LocalDateTime validationCodeValidity;

    @OneToMany(mappedBy = "person", orphanRemoval = true, cascade = CascadeType.ALL)
    @Setter(value = AccessLevel.NONE)
    private List<PersonProfile> personProfile;

    public void setPersonProfile(List<PersonProfile> listPersonProfile) {
        for (PersonProfile p : listPersonProfile) {
            p.setPerson(this);
        }
        personProfile = listPersonProfile;
    }
}
