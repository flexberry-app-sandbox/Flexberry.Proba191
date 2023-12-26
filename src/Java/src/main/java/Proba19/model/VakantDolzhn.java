package Proba19.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba19.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ВакантДолжн
 */
@Entity(name = "IISProba19ВакантДолжн")
@Table(schema = "public", name = "ВакантДолжн")
public class VakantDolzhn {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Должности")
    private String должности;

    @Column(name = "IDДолжности")
    private Integer idдолжности;


    public VakantDolzhn() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getДолжности() {
      return должности;
    }

    public void setДолжности(String должности) {
      this.должности = должности;
    }

    public Integer getIDДолжности() {
      return idдолжности;
    }

    public void setIDДолжности(Integer idдолжности) {
      this.idдолжности = idдолжности;
    }


}