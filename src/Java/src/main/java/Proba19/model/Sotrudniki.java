package Proba19.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba19.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISProba19Сотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИОСотруд")
    private String фиосотруд;

    @Column(name = "IDСотр")
    private Integer idсотр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DolzhnSotr")
    @Convert("DolzhnSotr")
    @Column(name = "ДолжнСотр", length = 16, unique = true, nullable = false)
    private UUID _dolzhnsotrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DolzhnSotr", insertable = false, updatable = false)
    private DolzhnSotr dolzhnsotr;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИОСотруд() {
      return фиосотруд;
    }

    public void setФИОСотруд(String фиосотруд) {
      this.фиосотруд = фиосотруд;
    }

    public Integer getIDСотр() {
      return idсотр;
    }

    public void setIDСотр(Integer idсотр) {
      this.idсотр = idсотр;
    }


}