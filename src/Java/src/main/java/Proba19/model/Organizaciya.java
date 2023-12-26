package Proba19.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba19.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Организация
 */
@Entity(name = "IISProba19Организация")
@Table(schema = "public", name = "Организация")
public class Organizaciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "ТелОрганиз")
    private Integer телорганиз;


    public Organizaciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public Integer getТелОрганиз() {
      return телорганиз;
    }

    public void setТелОрганиз(Integer телорганиз) {
      this.телорганиз = телорганиз;
    }


}