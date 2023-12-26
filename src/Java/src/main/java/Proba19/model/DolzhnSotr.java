package Proba19.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba19.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ДолжнСотр
 */
@Entity(name = "IISProba19ДолжнСотр")
@Table(schema = "public", name = "ДолжнСотр")
public class DolzhnSotr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDДолжности")
    private Integer idдолжности;

    @Column(name = "Должность")
    private String должность;


    public DolzhnSotr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDДолжности() {
      return idдолжности;
    }

    public void setIDДолжности(Integer idдолжности) {
      this.idдолжности = idдолжности;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }


}